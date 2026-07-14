import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'
import type { IconType } from 'react-icons'

/**
 * Brand/social icons live outside lucide-react (which doesn't ship logo marks),
 * so this is the single place mapping a social link's icon name to a component.
 */
export const socialIconMap: Record<string, IconType> = {
  Github: FiGithub,
  Linkedin: FiLinkedin,
  Instagram: FiInstagram,
  Mail: FiMail,
}
