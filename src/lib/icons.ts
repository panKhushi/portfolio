import {
  BarChart3,
  Brain,
  Sparkles,
  Code2,
  Database,
  Boxes,
  FlaskConical,
  Layers,
  Circle,
  type LucideIcon,
} from 'lucide-react'

/**
 * A closed set of icons referenced by name from data files (domains, skills).
 * Kept as an explicit map rather than `import * as Icons` so bundlers can
 * tree-shake unused lucide icons instead of pulling in the whole library.
 */
const iconRegistry: Record<string, LucideIcon> = {
  BarChart3,
  Brain,
  Sparkles,
  Code2,
  Database,
  Boxes,
  FlaskConical,
  Layers,
}

export function getIcon(name: string): LucideIcon {
  return iconRegistry[name] ?? Circle
}
