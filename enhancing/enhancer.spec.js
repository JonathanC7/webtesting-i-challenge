const {success, fail, repair} = require('./enhancer.js');
// test away!

test('success function', () => {
    const successValue = {
        name: `Dorian's Blade`,
        durability: 100,
        enhancement: 20
    };
    const successExpected = {
        name: `Dorian's Blade`,
        durability: 100,
        enhancement: 20
    };

    expect(success(successValue)).toStrictEqual(successExpected);
})

test('fail function', () => {
    const value = {
        name: 'iron sword',
        durability: 100,
        enhancement: 16
    }; 

    const expected = {
        name: 'iron sword',
        durability: 90,
        enhancement: 0
    };

    expect(fail(value)).toStrictEqual(expected);
})

test('repair function', () => {
    const value = {
        name: `Luden's Echo`,
        durability: 20,
        enhancement: 0
    };
    
    const expected = {
        name: `Luden's Echo`,
        durability: 100,
        enhancement: 0
    };

    expect(repair(value)).toStrictEqual(expected);
})