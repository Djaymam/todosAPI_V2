//todo json format   search how to export a variable on google 
exports.todosSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        obs: {
            type: 'string',
            required: false
        }
    }
}