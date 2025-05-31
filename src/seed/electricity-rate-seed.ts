import { axiosClient } from "@/helpers/axios-helper";

const electricityRates = [
    {
        "city": "Bangalore",
        "rate": 6.5,
        "unit": "kWh",
        "status": "DRAFT",
        "isActive": true,
        "notes": "Commercial electricity rate for Bangalore"
    },
    {
        "city": "Mumbai",
        "rate": 9.0,
        "unit": "kWh",
        "status": "DRAFT",
        "isActive": true,
        "notes": "Commercial electricity rate for Mumbai"
    },
    {
        "city": "Kolkata",
        "rate": 7.5,
        "unit": "kWh",
        "status": "DRAFT",
        "isActive": true,
        "notes": "Commercial electricity rate for Kolkata"
    },
    {
        "city": "Delhi",
        "rate": 8.5,
        "unit": "kWh",
        "status": "DRAFT",
        "isActive": true,
        "notes": "Commercial electricity rate for Delhi"
    }
]


const radiations = [
    {
        "city": "Bangalore",
        "name": "Bangalore 1",
        "unit": "kWh/m²/day",
        "status": "DRAFT",
        "isActive": true,
        "notes": "Annual average solar radiation data for Bangalore",
        "radiation": {
            "north": 150,
            "south": 250,
            "east": 200,
            "west": 200,
            "roof": 300
        }
    },
    {
        "city": "Mumbai",
        "name": "Mumbai 1",
        "unit": "kWh/m²/day",
        "status": "DRAFT",
        "isActive": true,
        "notes": "Annual average solar radiation data for Mumbai",
        "radiation": {
            "north": 180,
            "south": 350,
            "east": 280,
            "west": 270,
            "roof": 400
        }
    },
    {
        "city": "Kolkata",
        "name": "Kolkata 1",
        "unit": "kWh/m²/day",
        "status": "DRAFT",
        "isActive": true,
        "notes": "Annual average solar radiation data for Kolkata",
        "radiation": {
            "north": 200,
            "south": 400,
            "east": 300,
            "west": 290,
            "roof": 450
        }
    },
    {
        "city": "Delhi",
        "name": "Delhi 1",
        "unit": "kWh/m²/day",
        "status": "DRAFT",
        "isActive": true,
        "notes": "Annual average solar radiation data for Delhi",
        "radiation": {
            "north": 160,
            "south": 270,
            "east": 220,
            "west": 220,
            "roof": 320
        }
    }
]

export const createElectricityRates = async () => {
    electricityRates.forEach(async (rate) => {
        try {
            const response = await axiosClient.post("/electricity-rates", rate);
            console.log("response", response);
        } catch (error) {
            console.error("Error creating electricity rates:", error);
        }
    })
}

export const createSolarRadiationSeed = async () => {
    radiations.forEach(async (radiation) => {
        try {
            const response = await axiosClient.post("/solar-radiation", radiation);
            console.log("response", response);
        } catch (error) {
            console.error("Error creating solar radiation:", error);
        }
    })
}

