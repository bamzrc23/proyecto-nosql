const CarDataCheckboxesUpdate = (carData) => {
    let remoteCentralLocking = carData.remoteCentralLocking ? 1 : false;
    let audioInput = carData.audioInput ? 1 : false;
    let childSeat = carData.childSeat ? 1 : false;
    let music = carData.music ? 1 : false;
    let onboardComputer = carData.onboardComputer ? 1 : false;
    let airConditioner = carData.airConditioner ? 1 : false;
    let bluetooth = carData.bluetooth ? 1 : false;
    let gps = carData.gps ? 1 : false;

    return { ...carData, remoteCentralLocking, audioInput, childSeat, music, onboardComputer, airConditioner, bluetooth, gps }
}

export default CarDataCheckboxesUpdate;