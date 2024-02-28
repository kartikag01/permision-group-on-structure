export async function GET() {

    return Response.json({
        data: ["Full access", "No access", "Basic access"]
    });
}