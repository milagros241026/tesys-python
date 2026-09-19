import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Bell } from 'lucide-react';


export default function DotBadge() {
  return (
    <IconButton aria-label="show new notifications">
      <Badge color="secondary" variant="dot">
        <Bell />
      </Badge>
    </IconButton>
  );
}
