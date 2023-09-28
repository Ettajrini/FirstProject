import React from 'react';

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3];
    const scaleType = careType === 'light' ? '☀️' : '💧';

    return (
        <div onClick={() => infromationcareScale(careType, scaleValue)}>
            {range.map((rangeElem) => (
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            ))}
        </div>
    );
}

function infromationcareScale(scaleType, scaleValue) {
    console.log(scaleType);
    console.log(scaleValue);

    if (scaleType === 'light') {
        switch (scaleValue) {
            case 1:
                alert("Cette plante requiert peu de lumiere ");
                break;
            case 2:
                alert("Cette plante requiert modérement de lumiere");
                break;
            case 3:
                alert("Cette plante requiert beaucoup de lumiere");
                break;
            default:
                alert("Valeur de l'échelle non reconnue pour le type de soin 'light'");
                break;
        }
    } else {
        switch (scaleValue) {
            case 1:
                alert("Cette plante requiert peu d'arrosage ");
                break;
            case 2:
                alert("Cette plante requiert modérement d'arrosage");
                break;
            case 3:
                alert("Cette plante requiert beaucoup d'arrosage");
                break;
            default:
                alert("Valeur de l'échelle non reconnue pour le type de soin 'water'");
                break;
        }
    }
}

export default CareScale;
