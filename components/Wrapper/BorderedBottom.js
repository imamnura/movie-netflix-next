import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const BorderedBottom = styled(Box)(() => ({
  borderBottom: `8px solid ${grey[900]}`
}));

export default BorderedBottom;
