module.exports = {
	paths: {
		'/create': {
			post: {
				tags: {
					Tasks: 'Create a ',
					Vamos: 'si',
				},
				description: 'Create Task',
				operationId: 'createTask',
				parameters: [],
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/Task',
							},
						},
					},
				},
				responses: {
					201: {
						description: 'Task created successfully',
					},
					500: {
						description: 'Server error',
					},
				},
			},
		},
		'/id/{_id}': {
			put: {
				tags: {
					Tasks: 'Update a user',
				},
				description: 'Update User',
				operationId: 'updateUser',
				parameters: [
					{
						name: '_id',
						in: 'path',
						schema: {
							$ref: '#/components/schemas/_id',
						},
						description: 'Id of task to be updated',
					},
				],
				requestBody: {
					content: {
						'application/json': {
							schema: { $ref: '#/components/schemas/User' },
						},
					},
				},
				responses: {
					200: { description: 'User updated successfully' },
					500: { description: 'Server error' },
				},
			},
		},
	},
}
