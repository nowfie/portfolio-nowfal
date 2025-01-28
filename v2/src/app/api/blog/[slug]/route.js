import dbConnect from '@/lib/dbConnect'
import blog from '@/models/blog'
import mongoose from 'mongoose'
const Blog = blog

function statusHeader(status) {
    return {
        status: status,
        headers: { 'Content-type': 'application/json' }
    }
}

export async function GET(req, { params }) {
    try {
        const { slug } = await params

        const slugType = mongoose.Types.ObjectId.isValid(slug)

        await dbConnect()
        const blog = slugType ?
            await Blog.findById(slug) // Find by ID
            :
            await Blog.findOne({ title: slug }); // Find by title
        if (!blog) {
            return new Response(JSON.stringify({ message: 'Not Found' }), statusHeader(200))
        }
        return new Response(JSON.stringify({ message: 'success', data: blog }), statusHeader(200))
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), statusHeader(404))
    }
}

export async function PUT(req, { params }) {
    try {
        const { slug } = await params
        const body = await req.json()
        await dbConnect()
        const updateBlog = await Blog.findByIdAndUpdate(
            slug, body, {
                new: true,
                runValidators: true
            }
        )
        if (!updateBlog) {
            return new Response(JSON.stringify({ message: 'blog Not Found' }), statusHeader(404))
        }
        return new Response(JSON.stringify({ message: 'Updated successfully', data: updateBlog }), statusHeader(200))
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), statusHeader(500))
    }
}

export async function DELETE(req, { params }) {
    try {
        const { slug } = await params
        await dbConnect()
        const deleteBlog = await Blog.findByIdAndDelete(slug)
        if (!deleteBlog) {
            return new Response(JSON.stringify({ message: 'blog Not Found' }), statusHeader(404))
        }
        return new Response(JSON.stringify({ message: 'deleted successfully', data: deleteBlog }), statusHeader(200))
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), statusHeader(500))
    }
}