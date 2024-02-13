function calculateRhombus(){
    const majorRadius = getInputValueById('rombose-1');
    const minorRadius = getInputValueById('rombose-2');
    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('rombose-area', area);
    }
    