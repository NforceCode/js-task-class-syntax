'use strict';

// Реализовать класс RangeValidator, со следующими свойствами:
//     ■  from (number);
//     ■  to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.

/** Class for validating numbers in specified range. */
class RangeValidator {
  /**
   * Create a range.
   * @param {number} _from - min number in range.
   * @param {number} _to  - max number in range.
   */
  constructor(_from, _to) {
    this.from = _from;
    this.to = _to;

  }

  /**
   * Get _from value
   * @returns {number} 
   */
  get from () {
    return this._from;
  }

  /**
   * Get _to value
   * @returns {number} 
   */
  get to () {
    return this._to;
  }

  /**
   * Set _from value
   * @param {number} _from
   */
  set from (value) {
    if(typeof value !== 'number') {
      throw new TypeError('from parameter must be numeric');
    }

    if (typeof this._to !== 'undefined' && value > this._to) {
      throw new RangeError(`From value must be smaller than to (${this._to})`);
    }

    this._from = value;
  }

  /**
   * Set _to value
   * @param {number} _to
   */
  set to (value) {
    if(typeof value !== 'number') {
      throw new TypeError('to parameter must be numeric');
    }

    if (typeof this._from !== 'undefined' && this._from > value) {
      throw new RangeError(`To value must be larger than from (${this._from})`);
    }
    this._to = value;
  }

  /**
   * Get range array
   * @returns {Array} _from and _to values as an array
   */
  get range () {
    return [this._from, this._to];
  }

  /**
   * Check if number is in range from _from to _to
   * @param {number} number 
   * @returns {(number|RangeError)} returns number if it is in range between _from and _to, else returns RangeError
   */
  validate(number) {
    if(typeof number !== 'number') {
      throw new TypeError('Inputted parameter must be numeric');
    }

    if(number >= this._from && number <= this._to) {
      return number
    } else { 
      throw new RangeError (`${number} is not in range from ${this._from} to ${this._to}`);
    }
  }  
}

const data = new RangeValidator(1,10);
