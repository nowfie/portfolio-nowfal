import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";


function statusHeader(status) {
    return {
        status: status,
        headers: { 'Content-Type': 'application/json' }
    }
}

export async function GET(req) {
    try {
        await dbConnect()
        const project = await Project.find()
        if (!project) {
            return new Response(JSON.stringify({ message: 'Project not found' }), statusHeader(404))
        }
        return new Response(JSON.stringify({ message: 'Project fetched', data: project }), statusHeader(200))
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), statusHeader(500))
    }
}

export async function POST(req) {
    try {
        await dbConnect();
        const {
            title,
            description,
            category,
            details,
            statement,
            technologyStack: { paragraph, stack: { languages, frontend, backend, database, others } },
            conclusion
        } = await req.json();

        if (!title || !category || !description || !details || !statement || !paragraph || !languages || !frontend || !backend || !database || !others || !conclusion) {
            return new Response(
                JSON.stringify({ message: 'Please provide all required fields' }),
                statusHeader(400)
            );
        }

        const newProject = new Project({
            title,
            description,
            details,
            statement,
            category,
            technologyStack: {
                paragraph,
                stack: {
                    languages,
                    frontend,
                    backend,
                    database,
                    others
                }
            },
            conclusion
        });

        await newProject.save();
        return new Response(JSON.stringify({ message: 'Project added successfully', data: newProject }), statusHeader(200));

    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), statusHeader(500));
    }
}