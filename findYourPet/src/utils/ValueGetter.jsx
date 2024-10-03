
export const getRandomSpeed = () => {
    // 20% chance to get speed > 30
    return Math.random() < 0.2 ? Math.random() * (45 - 30) + 30 : Math.random() * 30;
};

export const getRandomLatLong = (baseVal) => {
    const change = (Math.random() * 0.0003) - 0.00015; // Change within ~20-30 meters
    return baseVal + change;
};
