import { Status } from '@prisma/client';
import { Badge } from './ui/Badge';

const statusMap: Record<
	Status,
	{ label: string; variant: 'red' | 'green' | 'violet' }
> = {
	OPEN: { label: 'Open', variant: 'violet' },
	IN_PROGRESS: { label: 'In Progress', variant: 'green' },
	CLOSED: { label: 'Closed', variant: 'red' },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
	return (
		<Badge variant={statusMap[status].variant}>{statusMap[status].label}</Badge>
	);
};

export default IssueStatusBadge;
