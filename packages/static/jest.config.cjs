module.exports = {
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: 'jsdom',
	extensionsToTreatAsEsm: ['.ts'],
	globals: {
		'ts-jest': {
			useESM: true
		}
	},
	moduleNameMapper: {
		'^\\$lib/(.*)$': '<rootDir>/src/lib/$1'
	},
	collectCoverage: true,
	collectCoverageFrom: ['./src/**'],
	coverageThreshold: {
		'./src/*.ts': {
			statements: 90,
			functions: 100
		}
	}
};
