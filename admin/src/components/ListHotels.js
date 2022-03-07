import { Button, Rating } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useSpring, animated } from "@react-spring/web";
// import Backdrop from "@mui/material/Backdrop";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Typography from "@mui/material/Typography";
// import PropTypes from "prop-types";
// import NavHotel from "./NavHotel";

// const Fade = forwardRef(function Fade(props, ref) {
//   const { in: open, children, onEnter, onExited, ...other } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter();
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited();
//       }
//     },
//   });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });

// Fade.propTypes = {
//   children: PropTypes.element,
//   in: PropTypes.bool.isRequired,
//   onEnter: PropTypes.func,
//   onExited: PropTypes.func,
// };

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 1000,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

function renameKey(obj, oldKey, newKey) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}

function renderRating(params) {
  return <Rating readOnly value={params.value} />;
}

function ListHotels() {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const cols = [
    { field: "name", headerName: "Name", width: "200" },
    {
      field: "rating",
      headerName: "Rating",
      width: "150",
      renderCell: renderRating,
      type: "number",
    },
    { field: "location", headerName: "Location", width: "200" },
    {
      field: "promo",
      headerName: "Promo",
      width: "100",
    },
  ];
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/hotels/all")
      .then((res) => {
        var j = res.data;
        j.forEach((obj) => renameKey(obj, "_id", "id"));
        setdata(j);
      })

      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>List Hotels</h1>
      <div style={{ height: 400, width: "100%" }}>
        <div style={{ height: 350, width: "100%" }}>
          <DataGrid rows={data} columns={cols} />
        </div>
        {/* <Button color="primary" variant="contained" onClick={handleOpen}>
          Add Hotel
        </Button>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <NavHotel />
            </Box>
          </Fade>
        </Modal> */}
      </div>
      <Link to="/AddHotel">
        <button className="btn">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </button>
      </Link>
    </div>
  );
}

export default ListHotels;
