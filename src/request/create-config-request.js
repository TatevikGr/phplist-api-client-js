class CreateConfigRequest {
    constructor(key, value, editable = null) {
        this.key = key;
        this.value = value;
        this.editable = editable;
    }
}

export default CreateConfigRequest;
