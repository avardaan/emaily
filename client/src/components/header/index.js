/*
Personal Best Practice:
named imports/exports in internal code of a component to prevent
default imports of sub-components from external clients.
default export of highest level container to external clients of the component for
ease of use and practical level of abstraction.
*/
import { Header } from './header-container';
export default Header;