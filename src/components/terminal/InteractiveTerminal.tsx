"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { PROJECTS } from "@/constants/projects";
import { SKILL_CATEGORIES } from "@/constants/skills";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

const AVAILABLE_COMMANDS = [
  "help",
  "whoami",
  "fastfetch",
  "projects",
  "skills",
  "contact",
  "cat",
  "ls",
  "printenv",
  "echo",
  "history",
  "clear",
  "date",
  "sudo",
  "exit",
];

const ENV_VARS: Record<string, string> = {
  PHILOSOPHY: `"${SITE_CONFIG.quote.text}" — ${SITE_CONFIG.quote.author}`,
  USER: "jayden",
  HOSTNAME: SITE_CONFIG.hostname,
  ROLE: SITE_CONFIG.role,
  EMAIL: SITE_CONFIG.email,
  GITHUB: SITE_CONFIG.github,
  LINKEDIN: SITE_CONFIG.linkedin,
  SHELL: "/bin/zsh",
  TERM: "xterm-256color",
};

const VIRTUAL_FILES: Record<string, string> = {
  "about_me.md": SITE_CONFIG.aboutMe.join("\n\n"),
  "contact.env": `NAME="${SITE_CONFIG.name}"\nROLE="${SITE_CONFIG.role}"\nEMAIL="${SITE_CONFIG.email}"\nGITHUB="${SITE_CONFIG.github}"\nLINKEDIN="${SITE_CONFIG.linkedin}"`,
  "skills.json": JSON.stringify(
    SKILL_CATEGORIES.reduce((acc, cat) => {
      acc[cat.title] = cat.skills;
      return acc;
    }, {} as Record<string, string[]>),
    null,
    2
  ),
};

export default function InteractiveTerminal() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on output update
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Initial welcome message
  useEffect(() => {
    const welcomeLog: CommandLog = {
      id: "welcome",
      command: "init",
      timestamp: new Date().toLocaleTimeString(),
      output: (
        <div className="space-y-2 text-xs sm:text-sm">
          <p className="text-gray-300">
            Welcome to the interactive portfolio terminal session. Type{" "}
            <span className="text-[#10B981] font-bold">help</span> to view all
            available commands.
          </p>
        </div>
      ),
    };
    setHistory([welcomeLog]);
  }, []);

  const handleCommandExecution = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    // Add to command history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output: React.ReactNode;

    switch (command) {
      case "help":
      case "?":
        output = (
          <div className="space-y-2 text-xs sm:text-sm pt-1">
            <div className="text-[#10B981] font-semibold">Available Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 font-mono text-xs">
              <div>
                <span className="text-cyan-400 font-bold">whoami</span>
                <span className="text-gray-400"> - Bio, role &amp; background</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">fastfetch</span>
                <span className="text-gray-400"> - System &amp; tech overview</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">projects</span>
                <span className="text-gray-400"> - List repositories &amp; links</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">skills</span>
                <span className="text-gray-400"> - Technology stack &amp; tools</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">ls</span>
                <span className="text-gray-400"> - List virtual files in directory</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">cat [file]</span>
                <span className="text-gray-400"> - View file contents (e.g. cat about_me.md)</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">printenv</span>
                <span className="text-gray-400"> - List environment variables</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">echo [$VAR]</span>
                <span className="text-gray-400"> - Print text or environment variables</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">contact</span>
                <span className="text-gray-400"> - Email, GitHub &amp; LinkedIn</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">clear</span>
                <span className="text-gray-400"> - Clear the terminal output</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">history</span>
                <span className="text-gray-400"> - View executed command history</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">date</span>
                <span className="text-gray-400"> - Display current date &amp; time</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">sudo</span>
                <span className="text-gray-400"> - Admin privileges test</span>
              </div>
              <div>
                <span className="text-cyan-400 font-bold">exit</span>
                <span className="text-gray-400"> - Return to homepage</span>
              </div>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm text-gray-300">
            <p>
              <span className="text-[#10B981] font-semibold">{SITE_CONFIG.name}</span>
              {" — "}
              <span className="text-white">{SITE_CONFIG.role}</span>
            </p>
            <p className="text-gray-400">{SITE_CONFIG.bioShort}</p>
            <p className="text-cyan-400 text-xs font-mono pt-1">
              Degree: {SITE_CONFIG.degree}
            </p>
          </div>
        );
        break;

      case "fastfetch":
      case "neofetch":
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-gray-300">
            <div className="text-gray-400 text-xs">
              <span className="text-[#10B981] font-bold">jayden@{SITE_CONFIG.hostname}</span>
              <span className="text-[#6B7280]">:</span>
              <span className="text-cyan-400">~</span>
              <span className="text-gray-400">$ fastfetch</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="space-y-1">
                <div><span className="text-[#10B981] font-semibold">User:</span> {SITE_CONFIG.name}</div>
                <div><span className="text-[#10B981] font-semibold">Role:</span> {SITE_CONFIG.role}</div>
                <div><span className="text-[#10B981] font-semibold">Division:</span> Cybersecurity &amp; Tech Controls</div>
                <div><span className="text-[#10B981] font-semibold">Education:</span> {SITE_CONFIG.degree}</div>
              </div>
              <div className="space-y-1">
                <div><span className="text-cyan-400 font-semibold">Enterprise Core:</span> Java, Spring Boot, Spring Security, PostgreSQL</div>
                <div><span className="text-cyan-400 font-semibold">Flagship Work:</span> Sentry (E2EE Messenger &amp; Voice)</div>
                <div><span className="text-cyan-400 font-semibold">Environment:</span> Linux, macOS,&amp; Windows</div>
                <div><span className="text-cyan-400 font-semibold">Status:</span> <span className="text-[#10B981]">Active &amp; Deploying</span></div>
              </div>
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-3 text-xs sm:text-sm pt-1">
            <div className="text-[#10B981] font-semibold">Featured Repositories:</div>
            <div className="space-y-2.5">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-2.5 rounded bg-[#090B0E] border border-[#1E2533] hover:border-[#059669]/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold font-sans">{p.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#059669]/20 text-[#10B981] border border-[#059669]/40">
                      {p.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1">{p.description}</p>
                  <div className="flex flex-wrap items-center justify-between gap-2 mt-2 pt-1 border-t border-[#1E2533]/60">
                    <span className="text-[11px] font-mono text-[#10B981]">
                      {p.technologies.join(" · ")}
                    </span>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-white"
                    >
                      <span>github</span>
                      <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-3 text-xs sm:text-sm pt-1">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.id} className="space-y-1">
                <div className="text-[#10B981] font-semibold">{cat.title}:</div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-[#090B0E] text-gray-300 border border-[#1E2533] text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "ls":
        output = (
          <div className="flex flex-wrap gap-4 font-mono text-xs text-gray-300 py-1">
            <span className="text-cyan-400 font-semibold">about_me.md</span>
            <span className="text-cyan-400 font-semibold">skills.json</span>
            <span className="text-[#10B981] font-semibold">projects/</span>
            <span className="text-cyan-400 font-semibold">contact.env</span>
          </div>
        );
        break;

      case "printenv":
      case "env":
        output = (
          <div className="space-y-1 font-mono text-xs text-gray-300 py-1">
            {Object.entries(ENV_VARS).map(([key, val]) => (
              <div key={key} className="break-all">
                <span className="text-[#10B981] font-semibold">{key}</span>={val}
              </div>
            ))}
          </div>
        );
        break;

      case "cat":
        if (args.length === 0) {
          output = <p className="text-amber-400 text-xs">Usage: cat [filename] (e.g., cat about_me.md)</p>;
        } else {
          const fileName = args[0].toLowerCase();
          if (fileName in VIRTUAL_FILES) {
            output = (
              <pre className="text-xs sm:text-sm text-gray-300 font-mono whitespace-pre-wrap leading-relaxed bg-[#090B0E] p-3 rounded border border-[#1E2533]">
                {VIRTUAL_FILES[fileName]}
              </pre>
            );
          } else {
            output = <p className="text-[#EF4444] text-xs">cat: {args[0]}: No such file or directory</p>;
          }
        }
        break;

      case "contact":
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-gray-300">
            <div>
              <span className="text-[#10B981] font-semibold">Email: </span>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-cyan-400 hover:underline">
                {SITE_CONFIG.email}
              </a>
            </div>
            <div>
              <span className="text-[#10B981] font-semibold">GitHub: </span>
              <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                {SITE_CONFIG.github}
              </a>
            </div>
            <div>
              <span className="text-[#10B981] font-semibold">LinkedIn: </span>
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                {SITE_CONFIG.linkedin}
              </a>
            </div>
          </div>
        );
        break;

      case "history":
        output = (
          <div className="space-y-1 font-mono text-xs text-gray-400">
            {commandHistory.map((h, i) => (
              <div key={i}>
                <span className="text-[#6B7280]">{i + 1}  </span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "date":
        output = <p className="text-gray-300 text-xs font-mono">{new Date().toString()}</p>;
        break;

      case "echo": {
        if (args.length === 0) {
          output = <p className="text-gray-300 text-xs font-mono"></p>;
          break;
        }

        const rawText = args.join(" ");
        const trimmedVar = rawText.replace(/^["']|["']$/g, "").trim();
        const upperVar = trimmedVar.startsWith("$")
          ? trimmedVar.slice(1).toUpperCase()
          : trimmedVar.toUpperCase();

        if (ENV_VARS[upperVar]) {
          output = (
            <div className="font-mono text-xs text-[#10B981] whitespace-pre-wrap py-0.5">
              {ENV_VARS[upperVar]}
            </div>
          );
        } else {
          // General $VAR expansion within text
          const expanded = rawText.replace(/\$([a-zA-Z_][a-zA-Z0-9_]*)/g, (_, name) => {
            const upper = name.toUpperCase();
            return ENV_VARS[upper] !== undefined ? ENV_VARS[upper] : "";
          });
          output = (
            <p className="text-gray-300 text-xs font-mono whitespace-pre-wrap">
              {expanded}
            </p>
          );
        }
        break;
      }

      case "sudo":
        output = (
          <p className="text-[#EF4444] text-xs font-mono">
            Permission denied: User &apos;guest&apos; is not in the sudoers file. This incident will be reported to Jayden.
          </p>
        );
        break;

      case "exit":
      case "quit":
        output = (
          <p className="text-[#10B981] text-xs font-mono">
            [Process completed — session closed. Redirecting to home...]
          </p>
        );
        setTimeout(() => {
          router.push("/");
        }, 350);
        break;

      case "cd":
        if (args.length === 0 || args[0] === "~" || args[0] === "/" || args[0] === "..") {
          output = (
            <p className="text-[#10B981] text-xs font-mono">
              Navigating to home (~)...
            </p>
          );
          setTimeout(() => {
            router.push("/");
          }, 350);
        } else if (args[0] === "projects" || args[0] === "~/projects" || args[0] === "./projects") {
          output = (
            <p className="text-[#10B981] text-xs font-mono">
              Navigating to ~/projects...
            </p>
          );
          setTimeout(() => {
            router.push("/projects");
          }, 350);
        } else {
          output = (
            <p className="text-[#EF4444] text-xs font-mono">
              cd: no such file or directory: {args[0]}
            </p>
          );
        }
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInput("");
        return;

      default:
        output = (
          <p className="text-[#EF4444] text-xs font-mono">
            zsh: command not found: {command}. Type <span className="text-[#10B981] font-bold">help</span> to view available commands.
          </p>
        );
        break;
    }

    const newLog: CommandLog = {
      id: Math.random().toString(36).substring(2, 9),
      command: trimmed,
      output,
      timestamp: new Date().toLocaleTimeString(),
    };

    setHistory((prev) => [...prev, newLog]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Enter key: execute
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommandExecution(input);
      return;
    }

    // Up Arrow: history backward
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
      return;
    }

    // Down Arrow: history forward
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
      return;
    }

    // Tab key: Autocompletion
    if (e.key === "Tab") {
      e.preventDefault();
      const current = input.trim();
      if (!current) return;

      if (current.startsWith("cat ")) {
        const filePrefix = current.slice(4).toLowerCase();
        const matched = Object.keys(VIRTUAL_FILES).find((f) => f.startsWith(filePrefix));
        if (matched) setInput(`cat ${matched}`);
      } else {
        const matched = AVAILABLE_COMMANDS.find((cmd) => cmd.startsWith(current.toLowerCase()));
        if (matched) setInput(matched);
      }
      return;
    }

    // Ctrl+L: Clear screen
    if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      setHistory([]);
      return;
    }

    // Ctrl+C: Cancel
    if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      setInput("");
      return;
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="rounded-xl bg-[#11151C] border border-[#1E2533] shadow-2xl overflow-hidden hover:border-[#059669]/50 transition-all duration-300 cursor-text w-full"
    >

      {/* Quick Suggestion Chips for Mobile & Fast Testing */}
      <div className="px-3 sm:px-4 py-2 bg-[#0E1218] border-b border-[#1E2533]/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none font-mono text-xs">
        <span className="text-[#6B7280] text-[11px] whitespace-nowrap mr-1">Quick Run:</span>
        {["help", "fastfetch", "whoami", "projects", "skills", "contact", "ls", "clear"].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleCommandExecution(cmd);
            }}
            className="px-2.5 py-1 rounded bg-[#161B24] hover:bg-[#1C232E] text-[#10B981] hover:text-white border border-[#1E2533] hover:border-[#059669]/50 transition-colors whitespace-nowrap text-[11px]"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Screen & Input Area */}
      <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm bg-[#090B0E]/95 min-h-[420px] max-h-[620px] overflow-y-auto space-y-4">
        {/* Output Log */}
        {history.map((log) => (
          <div key={log.id} className="space-y-1">
            {log.command !== "init" && (
              <div className="flex items-center space-x-2 text-xs select-none text-gray-400">
                <span className="text-[#10B981] font-bold">➜</span>
                <span className="text-cyan-400 font-semibold">terminal</span>
                <span className="text-[#6B7280]">git:(</span>
                <span className="text-[#EF4444] font-semibold">main</span>
                <span className="text-[#6B7280]">)</span>
                <span className="text-[#10B981] font-bold">❯</span>
                <span className="text-white font-mono">{log.command}</span>
              </div>
            )}
            <div className="pt-0.5">{log.output}</div>
          </div>
        ))}

        {/* Live Active Prompt Line */}
        <div className="flex items-center space-x-2 pt-2">
          <span className="text-[#10B981] font-bold text-sm select-none">➜</span>
          <span className="text-cyan-400 font-semibold select-none text-xs sm:text-sm">terminal</span>
          <span className="text-[#6B7280] select-none text-xs hidden xs:inline">git:(</span>
          <span className="text-[#EF4444] font-semibold select-none text-xs hidden xs:inline">main</span>
          <span className="text-[#6B7280] select-none text-xs hidden xs:inline">)</span>
          <span className="text-[#10B981] select-none text-xs font-bold mr-1">❯</span>

          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none caret-[#10B981]"
            placeholder="type 'help'..."
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            autoFocus
          />
        </div>

        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
