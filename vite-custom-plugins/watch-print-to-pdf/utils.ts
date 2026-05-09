import type { ViteDevServer, ModuleNode } from "vite";

/** Walk Vite's module graph and collect every transitive dependency ID. */
function collectDependencyIds(
  entryId: string,
  server: ViteDevServer,
): Set<string> {
  const visited = new Set<string>();

  function walk(id: string) {
    if (visited.has(id)) return;
    visited.add(id);
    const mod: ModuleNode | undefined = server.moduleGraph.getModuleById(id);
    if (!mod) return;
    for (const dep of mod.importedModules) {
      if (dep.id) walk(dep.id);
    }
  }

  walk(entryId);
  return visited;
}

/** Resolve a user-supplied path to the internal module ID Vite tracks. */
async function resolveEntryId(
  file: string,
  server: ViteDevServer,
): Promise<string | null> {
  try {
    const resolved = await server.pluginContainer.resolveId(file);
    return resolved?.id ?? null;
  } catch {
    return null;
  }
}

/** Return true when `changedFile` is `entryId` or one of its transitive deps. */
export async function isInDependencyTree(
  changedFile: string,
  entryFile: string,
  server: ViteDevServer,
): Promise<boolean> {
  const entryId = await resolveEntryId(entryFile, server);
  if (!entryId) return false; // entry not in graph yet

  const normalized = changedFile.replace(/\\/g, "/");

  if (normalized === entryId.replace(/\\/g, "/")) return true;

  const deps = collectDependencyIds(entryId, server);
  return [...deps].some((id) => id.replace(/\\/g, "/") === normalized);
}
