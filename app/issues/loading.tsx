import { Skeleton } from '@/components/ui/Skeleton';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/Table';
import IssueActions from './IssueActions';

const LoadingIssuesPage = () => {
	const issues = [1, 2, 3, 4, 5];

	return (
		<div>
			<IssueActions />
			<div className='rounded-md border'>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Issue</TableHead>
							<TableHead className='hidden md:table-cell'>Status</TableHead>
							<TableHead className='hidden md:table-cell'>Created</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{issues.map((issue) => (
							<TableRow key={issue}>
								<TableCell>
									<Skeleton className='w-[100px] h-[20px] rounded-full' />
									<div className='block md:hidden'>
										<Skeleton className='w-[100px] h-[20px] rounded-full' />
									</div>
								</TableCell>
								<TableCell className='hidden md:table-cell'>
									<Skeleton className='w-[100px] h-[20px] rounded-full' />
								</TableCell>
								<TableCell className='hidden md:table-cell'>
									<Skeleton className='w-[100px] h-[20px] rounded-full' />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default LoadingIssuesPage;
