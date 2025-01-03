import { AuchanObserver } from "./observers/impl/AuchanObserver";
import { CarrefourObserver } from "./observers/impl/CarrefourObserver";
import { IntermarcheObserver } from "./observers/impl/IntermarcheObserver";
import { LeclercObserver } from "./observers/impl/LeclercObserver";
import { SuperUObserver } from "./observers/impl/SuperUObserver";
import { IObserver } from "./observers/IObserver";

/**
 * Initializes and starts all observers.
 */
const observers: IObserver[] = [
    new AuchanObserver(),
    new CarrefourObserver(),
    new IntermarcheObserver(),
    new LeclercObserver(),
    new SuperUObserver()
];

observers.forEach(observer => observer.start());