"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Circle,
  Heart,
  ListVideo,
  PlayCircle,
  Search,
  Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

// --- Streamly themed onboarding ---

type OnboardingStep = {
  title: string;
  description: string;
  href: string;
  done: boolean;
};

const onboardingSteps: OnboardingStep[] = [
  { title: "Complete your profile", description: "Add your details for a personalized experience.", href: "/dashboard/settings", done: false },
  { title: "Add your favorites", description: "Start building your Watchlist with your top picks.", href: "/dashboard/feature", done: false },
  { title: "Invite family or friends", description: "Share Streamly access with your household.", href: "/dashboard/team", done: false },
];

const quickActions = [
  { label: "Find something to watch", href: "#", icon: Search },
  { label: "My Watchlist", href: "/dashboard/feature", icon: ListVideo },
  { label: "Account settings", href: "/dashboard/settings", icon: PlayCircle },
];

type Favorite = {
  id: string;
  title: string;
  genre: string;
  note: string;
};

const initialFavorites: Favorite[] = [
  { id: "f-1", title: "Inception", genre: "Sci-Fi", note: "Must rewatch" },
  { id: "f-2", title: "Stranger Things", genre: "Drama", note: "Season 4 next" },
];

export function DashboardContent({ greeting, firstName }: { greeting: string; firstName: string }) {
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<Favorite[]>(initialFavorites);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingFavorite, setEditingFavorite] = useState<Favorite | null>(null);

  const filteredFavorites = useMemo(
    () =>
      query
        ? favorites.filter((item) =>
            [item.title, item.genre, item.note].some((f) =>
              f.toLowerCase().includes(query.toLowerCase())
            )
          )
        : favorites,
    [favorites, query]
  );

  function openCreateDialog() {
    setEditingFavorite(null);
    setDialogOpen(true);
  }

  function openEditDialog(item: Favorite) {
    setEditingFavorite(item);
    setDialogOpen(true);
  }

  function handleSaveFavorite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = String(formData.get("title") ?? "").trim();
    const genre = String(formData.get("genre") ?? "").trim();
    const note = String(formData.get("note") ?? "").trim();

    if (!title || !genre) return;

    if (editingFavorite) {
      setFavorites((prev) =>
        prev.map((f) =>
          f.id === editingFavorite.id ? { ...f, title, genre, note } : f
        )
      );
    } else {
      setFavorites((prev) => [{ id: `f-${Date.now()}`, title, genre, note }, ...prev]);
    }

    setDialogOpen(false);
  }

  return (
    <>
      {/* Welcome banner */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              {greeting}, {firstName}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Start building your streaming universe. Personalize your Watchlist and get ready to stream!
            </p>
          </div>
          <div className="flex items-center gap-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Button
                  key={action.label}
                  variant="outline"
                  size="sm"
                  asChild
                  className="gap-1.5"
                  disabled={action.href === "#"}
                >
                  <Link href={action.href}>
                    <Icon className="size-3.5" />
                    <span className="hidden sm:inline">{action.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search your Watchlist..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 h-10 bg-muted/50 border-muted-foreground/15 focus-visible:border-border focus-visible:bg-background"
          />
        </div>
      </div>

      {/* Onboarding steps */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Get Started</CardTitle>
              <Badge variant="outline" className="text-xs">
                0 / {onboardingSteps.length}
              </Badge>
            </div>
            <CardDescription>Set up your Streamly experience:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            {onboardingSteps.map((step) => (
              <Link
                key={step.title}
                href={step.href}
                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
              >
                {step.done ? (
                  <Star className="size-[18px] shrink-0 text-emerald-500" />
                ) : (
                  <Circle className="size-[18px] shrink-0 text-muted-foreground/40" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-none">{step.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{step.description}</p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-muted-foreground" />
              </Link>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Your Watchlist</CardTitle>
            <CardDescription>
              Add your favorite shows and movies to track what you want to watch.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-end pb-2">
              <Button size="sm" onClick={openCreateDialog}>
                <Heart className="size-4 mr-1.5" />
                Add to Watchlist
              </Button>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-2 text-left text-xs font-semibold">Title</th>
                    <th className="p-2 text-left text-xs font-semibold">Genre</th>
                    <th className="p-2 text-left text-xs font-semibold">Note</th>
                    <th className="p-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFavorites.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-3 text-center text-muted-foreground">
                        Your Watchlist is empty. Add something to get started!
                      </td>
                    </tr>
                  ) : (
                    filteredFavorites.map((item) => (
                      <tr key={item.id} className="border-t">
                        <td className="p-2">{item.title}</td>
                        <td className="p-2">{item.genre}</td>
                        <td className="p-2">{item.note}</td>
                        <td className="p-2 text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openEditDialog(item)}
                            className="text-muted-foreground"
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Watchlist Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingFavorite ? "Edit Watchlist Item" : "Add to Watchlist"}
            </DialogTitle>
            <DialogDescription>
              {editingFavorite
                ? "Update details for your show or film."
                : "Add a new show or movie to your personal Watchlist."}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSaveFavorite} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="watch-title">Title</Label>
              <Input
                id="watch-title"
                name="title"
                defaultValue={editingFavorite?.title ?? ""}
                placeholder="e.g. Inception"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="watch-genre">Genre</Label>
              <Input
                id="watch-genre"
                name="genre"
                defaultValue={editingFavorite?.genre ?? ""}
                placeholder="Drama, Sci-Fi, Comedy..."
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="watch-note">Note (optional)</Label>
              <Input
                id="watch-note"
                name="note"
                defaultValue={editingFavorite?.note ?? ""}
                placeholder="Add a personal note (optional)"
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingFavorite ? "Save changes" : "Add to Watchlist"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}