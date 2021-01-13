'use strict';

// Реализовать класс RangeValidator, со следующими свойствами:
//     ■  from (number);
//     ■  to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.

class RangeValidator {
  constructor(_from, _to) {
    this.from = _from;
    this.to = _to;

  }

  get from () {
    return this._from;
  }

  get to () {
    return this._to;
  }

  set from (value) {
    if(typeof value !== 'number') {
      throw new TypeError('from parameter must be numeric');
    }

    if (typeof this._to !== 'undefined' && value > this._to) {
      throw new RangeError(`From value must be smaller than to (${this._to})`);
    }

    this._from = value;
  }

  set to (value) {
    if(typeof value !== 'number') {
      throw new TypeError('from parameter must be numeric');
    }

    if (typeof this._from !== 'undefined' && this._from > value) {
      throw new RangeError(`To value must be larger than from (${this._from})`);
    }
    this._to = value;
  }

  get range () {
    return [this._from, this._to];
  }
}

const data = new RangeValidator(1,10);
