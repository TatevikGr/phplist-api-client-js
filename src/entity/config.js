class Config {
    constructor(data = {}) {
        this.key = data.key !== undefined ? String(data.key) : '';
        this.value = data.value !== undefined ? String(data.value) : '';
        this.editable = data.editable !== undefined ? Boolean(data.editable) : false;
        this.type = data.type !== undefined ? String(data.type) : '';
    }
}

export default Config;
