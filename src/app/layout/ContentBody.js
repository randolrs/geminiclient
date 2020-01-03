import styled from 'styled-components';

import { NAV_HEIGHT } from './dimensions';

const ContentBody = styled.div`
  min-height: calc(100vh - ${ NAV_HEIGHT }px);
  margin-top: ${ NAV_HEIGHT }px;
`;

export default ContentBody;
