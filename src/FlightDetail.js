// import * as React from "react";
// import List from "@kiwicom/orbit-components/lib/List";
// import ListItem from "@kiwicom/orbit-components/lib/List/ListItem";
// import CarrierLogo from "@kiwicom/orbit-components/lib/CarrierLogo";
// import Button from "@kiwicom/orbit-components/lib/Button";
// import Separator from "@kiwicom/orbit-components/lib/Separator"
// import formatDate from "date-fns/format";

// const FlightDetail = ({ item }) => (
//   <React.Fragment>
//     <List size="small" type="primary">
//       {item.route.map(x => {
//         const departureTime = new Date(x.dTime * 1000);
//         const arrivalTime = new Date(x.aTime * 1000);
//         return (
//           <ListItem
//             icon={
//               <CarrierLogo size="small" carriers={[{ code: item.airline }]} />
//             }
//           >
//             {`${formatDate(departureTime, "DD.MM.YYYY HH:mm")} ${
//               x.flyFrom
//             } - ${formatDate(arrivalTime, "DD.MM.YYYY HH:mm")} ${x.flyTo}`}
//           </ListItem>
//         );
//       })}
//     </List>
//     <br />
//     <Button
//       href={`https://kiwi.com/us/booking?booking_token=${item.booking_token}`}
//       external
//       block
//       type="secondary"
//     >
//       Proceed to booking
//     </Button>
//   </React.Fragment>
// );

// export default FlightDetail;
