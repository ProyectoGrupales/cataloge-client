// Components
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

// Icons
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const Test = () => {
	return (
		<div>
			<h1>Esto es Test</h1>
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
					onClick={() => console.log('Hola')}
					icon={<AddIcon />}
					tooltipTitle={'Nuevo producto'}
				/>
				<SpeedDialAction
					onClick={() => console.log('Hola')}
					icon={<EditIcon />}
					tooltipTitle={'Eliminar productos'}
				/>
				<SpeedDialAction
					onClick={() => console.log('Hola')}
					icon={<DeleteIcon />}
					tooltipTitle={'Editar producto'}
				/>
			</SpeedDial>
		</div>
	);
};

export default Test;
