import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";
import AdminPanel from "./components/AdminPanel";
import MapView from "./components/MapView";

const App = () => {
        const [profiles, setProfiles] = useState([
            { id: 1, name: "John Doe", photo: "https://via.placeholder.com/150", description: "Software Engineer", address: "1600 Amphitheatre Parkway, Mountain View, CA" },
            { id: 2, name: "Jane Smith", photo: "https://via.placeholder.com/150", description: "Data Scientist", address: "1 Infinite Loop, Cupertino, CA" },
        ]);

        return ( <
                Router >
                <
                Routes >
                <
                Route path = "/"
                element = { < ProfileList profiles = { profiles }
                    />} / >
                    <
                    Route path = "/profile/:id"
                    element = { < ProfileDetails profiles = { profiles }
                        />} / >
                        <
                        Route path = "/admin"
                        element = { < AdminPanel profiles = { profiles }
                            setProfiles = { setProfiles }
                            />} / >
                            <
                            Route path = "/map/:id"
                            element = { < MapView profiles = { profiles }
                                />} / >
                                <
                                /Routes> <
                                /Router>
                            );
                        };

                        export default App;