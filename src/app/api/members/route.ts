export async function GET() {

    return Response.json({
        data: [
            { "user": "Ben Stockton", "email": "ben@dealsplus.io", "organisation": "Dealsplus" },
            { "user": "Sai Padala", "email": "sai@dealsplus.io", "organisation": "Dealsplus" },
            { "user": "Matt Wallis", "email": "matt@dealsplus.io", "organisation": "Phoneix" },
        ]
    });
}