import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Switch } from "@workspace/ui/components/switch";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@workspace/ui/components/card";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-400">Settings</h1>

      <Card className="bg-gray-800 border-green-400">
        <CardHeader>
          <CardTitle className="text-green-400">Account Information</CardTitle>
          <CardDescription className="text-gray-300">
            Update your account details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="bg-gray-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username" className="text-white">
              Username
            </Label>
            <Input
              id="username"
              placeholder="johndoe"
              className="bg-gray-700 text-white"
            />
          </div>
          <Button className="bg-green-400 text-gray-900 hover:bg-green-500">
            Update Account
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-green-400">
        <CardHeader>
          <CardTitle className="text-green-400">Responsible Gambling</CardTitle>
          <CardDescription className="text-gray-300">
            Set limits to promote responsible betting
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="daily-limit" className="text-white">
              Daily Deposit Limit
            </Label>
            <Input
              id="daily-limit"
              type="number"
              placeholder="Enter amount"
              className="bg-gray-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weekly-limit" className="text-white">
              Weekly Deposit Limit
            </Label>
            <Input
              id="weekly-limit"
              type="number"
              placeholder="Enter amount"
              className="bg-gray-700 text-white"
            />
          </div>
          <Button className="bg-green-400 text-gray-900 hover:bg-green-500">
            Set Limits
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-green-400">
        <CardHeader>
          <CardTitle className="text-green-400">Security</CardTitle>
          <CardDescription className="text-gray-300">
            Manage your account security
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            className="w-full text-white hover:text-green-400"
          >
            Change Password
          </Button>
          <Button
            variant="outline"
            className="w-full text-white hover:text-green-400"
          >
            Enable Two-Factor Authentication
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
