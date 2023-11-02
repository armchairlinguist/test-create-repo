const createScvDefFake = () => {
    const funcs = {
        baseObject1: {
            // change a property of an existing SCV
            // ok: typescript.deployed-to-lunadb-true
            deployedToLunaDb: true,

            // add new SCV and set deployedToLunaDb to false
            thisIsOk: new ServerComputedValue({
                parameter: "NoParameters",
                returnType: primitive("string"),
                // ok: typescript.deployed-to-lunadb-true
                deployedToLunaDb: false,
                ownershipTaskUrl: "12345",
                teamOwner: "team",
            }),
        },

        // add new SCV but set deployedToLunaDb to true
        baseObject2: {
            notOkScv1: new ServerComputedValue({
                parameter: "NoParameters",
                returnType: primitive("string"),
                // ruleid: typescript.deployed-to-lunadb-true
                deployedToLunaDb: true,
                ownershipTaskUrl: "12345",
                teamOwner: "team",
            }),

            notOkScv2: new ServerComputedValue({
                parameter: "NoParameters",
                parameterSchema: z.object({
                    number: z.number(),
                }),
                returnType: primitive("string"),
                // ruleid: typescript.deployed-to-lunadb-true
                deployedToLunaDb: true,
                ownershipTaskUrl: "12345",
                teamOwner: "team",
            }),

            notOkScv3: new ServerComputedValue({
                parameter: "NoParameters",
                parameterSchema: z.object({
                    number: z.number(),
                }),
                returnType: primitive("string"),
                // ruleid: typescript.deployed-to-lunadb-true
                deployedToLunaDb: true,
                ownershipTaskUrl: "12345",
                teamOwner: "team",
                alertThresholds: {
                    thresholds: { threshold1: 100, threshold2: 200 },
                },
            }),
        },
    };
};
