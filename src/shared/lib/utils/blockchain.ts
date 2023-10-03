export class Blockchain {
  static UNIT = 'gwei';

  static base64ToBytes(base64: string): Uint8Array {
    const binaryString = this.base64toString(base64);
    const { length } = binaryString;
    const bytes = new Uint8Array(length);
    for (let idx = 0; idx < length; ++idx) {
      bytes[idx] = binaryString.charCodeAt(idx);
    }
    return bytes;
  }

  static base64ToHex(base64: string): string {
    const bytes = this.base64ToBytes(base64);
    return this.bytesToHex(bytes);
  }

  static hashToHex(base64OrHexHash: string): string {
    return base64OrHexHash.length === 44 ? this.base64ToHex(base64OrHexHash) : base64OrHexHash;
  }

  static base64toString(base64: string) {
    return atob(base64);
  }

  static bytesToHex(buffer: Uint8Array) {
    const toHex: string[] = [];
    const hexArray = [];
    const toByte: Record<string, number> = {};

    for (let ord = 0; ord <= 0xff; ++ord) {
      let s = ord.toString(16);

      if (s.length < 2) {
        s = `0${s}`;
      }

      toHex.push(s);
      toByte[s] = ord;
    }

    for (let idx = 0; idx < buffer.byteLength; ++idx) {
      hexArray.push(toHex[buffer[idx]]);
    }

    return hexArray.join('');
  }
}
