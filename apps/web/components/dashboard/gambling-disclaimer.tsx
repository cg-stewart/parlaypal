import { AlertTriangle } from "lucide-react";

export default function GamblingDisclaimer() {
  return (
    <div className="bg-yellow-400 text-gray-900 p-4 rounded-lg flex items-center space-x-4">
      <AlertTriangle className="h-6 w-6 flex-shrink-0" />
      <div>
        <p className="font-semibold">Gambling Problem? Help is available.</p>
        <p>
          Call 1-800-GAMBLER or visit{" "}
          <a
            href="https://www.ncpgambling.org"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ncpgambling.org
          </a>{" "}
          for support.
        </p>
      </div>
    </div>
  );
}
