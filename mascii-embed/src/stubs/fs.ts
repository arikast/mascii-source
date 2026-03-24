// Browser stub for Node's 'fs' module.
// Only writeFileSync is referenced (by MusicXmlGenerator.save); it's never
// called from the embed, so a no-op is fine.
export function writeFileSync(_path: string, _data: string, _enc?: string): void {
  /* no-op */
}
export default { writeFileSync }
