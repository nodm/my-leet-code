export class RandomizedSet {
  #values = new Set<number>();

  constructor() {}

  insert(val: number): boolean {
    if (this.#values.has(val)) return false;

    this.#values.add(val);

    return true;
  }

  remove(val: number): boolean {
    if (!this.#values.has(val)) return false;

    this.#values.delete(val);
    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.#values.size);
    return Array.from(this.#values)[randomIndex];
  }
}

// export class RandomizedSet {
//   #map: {[key: number]: boolean} = {};

//   constructor() {}

//   insert(val: number): boolean {
//     if (this.#map[val]) return false;

//     this.#map[val] = true;
//     return true;
//   }

//   remove(val: number): boolean {
//     if (!this.#map[val]) return false;

//     delete this.#map[val];
//     return true;
//   }

//   getRandom(): number {
//     const keys = Object.keys(this.#map);
//     const randomIndex = Math.floor(Math.random() * keys.length);
//     return Number(keys[randomIndex]);
//   }
// }
