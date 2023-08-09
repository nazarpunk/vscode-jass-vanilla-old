// https://github.com/stijnherfst/HiveWE/wiki/war3map(skin).w3%2A-Modifications

import {DataReader} from '../../utils/data-reader'
import W3abdhqtuItem from './w3abdhqtu-item'
import {DataReaderType} from '../../utils/data-reader-type'

export class W3abdhqtu {
    constructor(
        private readonly reader: DataReader,
        private readonly adq: boolean
    ) {
        try {
            this.#read()
        } catch (e) {
            if (e instanceof Error) this.errors.push(e)
        }
    }

    errors: Error[] = []
    list: W3abdhqtuItem[] = []
    version: number = 0

    #read() {
        this.version = this.reader.read(DataReaderType.uint32le)
        if ([1, 2, 3].indexOf(this.version) < 0) {
            throw new Error(`This format is unsupported: ${this.version}`)
        }

        for (let i = 0; i < 2; i++) {
            const count = this.reader.read<number>(DataReaderType.uint32le)

            for (let k = 0; k < count; k++) {
                this.list.push(new W3abdhqtuItem(this.reader, this.adq, this.version))
            }
        }

        if (this.reader.cursor !== this.reader.byteLength) {
            throw new Error(`Read not complete: ${this.reader.cursor} !== ${this.reader.byteLength}`)
        }
    }
}
