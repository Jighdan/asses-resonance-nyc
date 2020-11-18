import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const Notification = (props) => {
	return (
		<Snackbar
			anchorOrigin={ {
				vertical: "top",
				horizontal: "right"
			} }
			open= { props.open }
			autoHideDuration={ 6000 }
			onClose={ props.handleClose }
			message={ props.message }
		/>
	);
};

export default Notification;