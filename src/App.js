import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main className="App-main">
          <p>Let's start coding</p>
        </main>
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import Separator from "@kiwicom/orbit-components/lib/Separator";
// import axios from "axios";

// import SearchForm from "./SearchForm";
// import SearchResults from "./SearchResults";
// import logo from "./logo.svg";
// import "./App.css";

// import mock from "./mock.json";

// class App extends Component {
//   state = {
//     items: [],
//     loading: false,
//     error: null
//   };

//   onSubmit = ({ flyFrom, flyTo, departureOn }) => {
//     this.setState({ error: null, loading: true }, async () => {
//       const params = {
//         flyFrom,
//         to: flyTo,
//         dateFrom: departureOn
//       };

//       try {
//         const { data } = await axios.get("https://api.skypicker.com/flights", {
//           params
//         });

//         this.setState({ items: data.data, loading: false });
//       } catch (error) {
//         this.setState({ error, loading: false });
//       }
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>

//         <main className="App-main">
//           <SearchForm onSubmit={this.onSubmit} />
//           <Separator />
//           <SearchResults {...this.state} />
//         </main>
//       </div>
//     );
//   }
// }

// export default App;
