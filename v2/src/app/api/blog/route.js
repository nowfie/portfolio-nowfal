import dbConnect from "@/lib/dbConnect"
import blog from "@/models/blog"


function statusHeader(status) {
    return {
        status: status,
        headers: { 'Content-Type': 'application/json' }
    }
}

export async function GET(req) {
    try {
        await dbConnect()

        const blogs = await blog.find()
        if (!blogs.length > 0) {
            return new Response(JSON.stringify({ message: 'Blogs are not available' }), statusHeader(200))
        }
        return new Response(JSON.stringify({ message: 'Hello world', data: blogs }), statusHeader(200))
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), statusHeader(404))
    }
}

export async function POST(req) {
    try {
        await dbConnect()
        const { title, description, content, message, conclusion, image, date } = await req.json()

        if (!title || !description || !image || !date) {
            return new Response(
                JSON.stringify({ message: 'Please provide all required fields (title, description, image, date)' }),
                statusHeader(400)
            );
        }

        const newBlog = new blog({
            title,
            description,
            content,
            message,
            conclusion,
            image,
            date
        });

        await newBlog.save()
        return new Response(JSON.stringify({ message: 'Added blog successfully', data: newBlog }), statusHeader(201))
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), statusHeader(500))
    }
}