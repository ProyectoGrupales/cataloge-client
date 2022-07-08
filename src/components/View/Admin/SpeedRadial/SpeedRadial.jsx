// Components
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

// Icons
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const SpeedDialMenu = ({ catalogeData, setEditMode, setDeleteMode }) => {
	const redirect = () => {
		window.location.href = `/admin/${catalogeData.name}/cardCreator`;
	};

	return (
		<SpeedDial
			ariaLabel='SpeedDial basic example'
			sx={{
				position: 'absolute',
				bottom: 16,
				right: 16,
			}}
			FabProps={{
				sx: {
					bgcolor: 'secondary.main',
					'&:hover': {
						bgcolor: 'secondary.main',
					},
				},
			}}
			icon={<SpeedDialIcon />}
		>
			<SpeedDialAction
				onClick={redirect}
				icon={<AddIcon />}
				tooltipTitle={'Nuevo producto'}
			/>
			<SpeedDialAction
				onClick={() => {
					setDeleteMode(prev => !prev);
					setEditMode(false);
				}}
				icon={<DeleteIcon />}
				tooltipTitle={'Eliminar productos'}
			/>
			<SpeedDialAction
				onClick={() => {
					setEditMode(prev => !prev);
					setDeleteMode(false);
				}}
				icon={<EditIcon />}
				tooltipTitle={'Editar producto'}
			/>
		</SpeedDial>
	);
};

export default SpeedDialMenu;
