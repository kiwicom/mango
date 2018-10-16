import * as React from "react";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Button from "@kiwicom/orbit-components/lib/Button";
import Stack from "@kiwicom/orbit-components/lib/Stack";

const STORAGE_KEY = "";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    const storageEntry = localStorage.getItem(STORAGE_KEY);

    this.state = storageEntry
      ? JSON.parse(storageEntry)
      : {
          flyFrom: "",
          flyTo: "",
          departureOn: ""
        };
  }

  onFlyFromChange = event => {
    this.setState({ flyFrom: event.target.value });
  };

  onFlyToChange = event => {
    this.setState({ flyTo: event.target.value });
  };

  onDepartureOnChange = event => {
    this.setState({ departureOn: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    this.props.onSubmit(this.state);
  };

  render() {
    const { flyFrom, flyTo, departureOn } = this.state;

    return (
      <form className="SearchForm" onSubmit={this.onSubmit}>
        <Stack direction="row" spaceAfter="large" align="end">
          <InputField
            label="Fly from"
            value={flyFrom}
            placeholder="Brno"
            onChange={this.onFlyFromChange}
          />
          <InputField
            label="Fly to"
            value={flyTo}
            placeholder="London"
            onChange={this.onFlyToChange}
          />
          <InputField
            label="Departure"
            value={departureOn}
            placeholder="1/10/2018"
            onChange={this.onDepartureOnChange}
          />
          <Button submit>Search</Button>
        </Stack>
      </form>
    );
  }
}
