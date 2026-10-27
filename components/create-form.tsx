"use client";

import Link from "next/link";

interface CreateFormProp{
    onSuccess?: (token: string) =>void;
    onActionFailure?: (error: string) => void;
}

export default function CreateForm({}: CreateFormProp){
    return <form className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm p-8 space-y-6">
        <div>
            <h1 className="text-center">Create account here</h1>
            <label>Email</label>
            <input
            id="email"
            name="email"
            placeholder="email@example.com"
            />
        </div>
        <div>
            <label>Password</label>
            <input
            id="password"
            name="password"
            placeholder="********"
            />
        </div>
        <div>
            <label>Confirm Password</label>
            <input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
            />
        </div>

        <div>
            <button className="block mx-auto px-6 py-2 border border-gray-300 rounded-lg  hover:bg-orange-100 transition">
                Submit
            </button>
            <Link href="/login" className="block text-center text-blue-600 hover:underline">Already have an account? Log In.</Link>

        </div>

        </div>
        
    </form>
}