type Meter = number & { __brand: 'Meter' };
type Kilometer = number & { __brand: 'Kilometer' };

const oneMeter: Meter = 1 as Meter;

const km: Kilometer = 5 as Kilometer;

function calculateDistanceInMeters(distance: Meter): Meter {
    return distance;
}

calculateDistanceInMeters(oneMeter);
calculateDistanceInMeters(km);

