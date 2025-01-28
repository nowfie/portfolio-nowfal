import dbConnect from "@/lib/dbConnect";
import Project from "@/models/Project";
import mongoose from "mongoose";

function statusHeader(status) {
    return {
        status: status,
        headers: { 'Content-Type': 'application/json' }
    }
}

export async function GET(req, { params }) {
    try {
        const { slug } = await params
        const slugType = mongoose.Types.ObjectId.isValid(slug)

        await dbConnect()
        const project = slugType ?
            await Project.findById(slug) :
            await Project.findOne({ title: slug });
        console.log(project)
        if (!project) {
            return new Response(JSON.stringify({ message: 'Project not found' }), statusHeader(200))
        }
        return new Response(JSON.stringify({ message: 'success', data: project }), statusHeader(200))

    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), statusHeader(500))
    }
}

export async function PUT(req, { params }) {
    try {
        const { slug } = await params
        const body = await req.json();
        await dbConnect()
        const updatedProject = await Project.findByIdAndUpdate(slug, body, {
            new: true,
            runValidators: true
        })
        if (!updatedProject) {
            return new Response(JSON.stringify({ message: 'Project not found' }), statusHeader(404));
        }
        return new Response(JSON.stringify({ message: 'Project updated successfully', data: updatedProject }), statusHeader(200));
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), statusHeader(500))
    }
}

export async function DELETE(req, { params }) {
    try {
        const { slug } = await params
        await dbConnect()
        const deletedProject = await Project.findByIdAndDelete(slug)
        if (!deletedProject) {
            return new Response(JSON.stringify({ message: 'Project not found' }), statusHeader(404));
        }
        return new Response(JSON.stringify({ message: 'Project deleted successfully' }), statusHeader(200));
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), statusHeader(500))
    }
}