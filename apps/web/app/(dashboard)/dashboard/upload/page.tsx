"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically upload the file to your server
    console.log("Uploading file:", file);
    // Reset the file input
    setFile(null);
  };

  return (
    <Card className="max-w-md mx-auto bg-gray-800 border-green-400">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-400">
          Upload Betting Ticket
        </CardTitle>
        <CardDescription className="text-gray-300">
          Upload a screenshot of your betting ticket to track it.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ticket" className="text-white">
              Ticket Screenshot
            </Label>
            <Input
              id="ticket"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="bg-gray-700 text-white border-gray-600 focus:border-green-400"
            />
          </div>
          <Button
            type="submit"
            disabled={!file}
            className="w-full bg-green-400 text-gray-900 hover:bg-green-500"
          >
            Upload Ticket
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
