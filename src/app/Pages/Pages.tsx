'use client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Intro from "./Intro";
import Cardpick from "./Cardpick";
import Result from "./Result";
import bg from "../forest.png";

export default function Pages() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center" style={{ backgroundImage: `url(https://images.pexels.com/photos/172289/pexels-photo-172289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <Router>
                <div >
                    <Routes>
                        <Route path="/" element={<Intro />} />
                        <Route path="/Cardpick" element={<Cardpick />} />
                        <Route path="/Result" element={<Result />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );

}