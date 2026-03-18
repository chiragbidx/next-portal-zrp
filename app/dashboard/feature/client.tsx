"use client";

import {
  createFeatureItemAction,
  deleteFeatureItemAction,
  updateFeatureItemAction,
} from "@/app/dashboard/feature/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Heart, ListVideo, Trash2 } from "lucide-react";

// Repurposed for "My Watchlist" / "My List" on Streamly demo.

type ClientProps = {
  status: "success" | "error" | null;
  message: string | null;
  canManage: boolean;
  items: {
    id: string;
    title: string;
    description: string;
    status: string;
    updatedAt: string;
  }[];
};

function formatTimestamp(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "Unknown";
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  const hh = String(date.getUTCHours()).padStart(2, "0");
  const min = String(date.getUTCMinutes()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${min} UTC`;
}

export default function Client({ status, message, canManage, items }: ClientProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
            <ListVideo className="size-6" />
            My Watchlist
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Add series or movies you want to watch next. This example shows working CRUD for your personal streaming favorites.
          </p>
        </header>
        {canManage ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Heart className="size-4 mr-1.5" />
                Add to Watchlist
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add to Watchlist</DialogTitle>
                <DialogDescription>
                  Add a new show or movie to “My Watchlist.” You can edit or remove these anytime.
                </DialogDescription>
              </DialogHeader>
              <form action={createFeatureItemAction} className="space-y-3">
                <div className="space-y-2">
                  <label htmlFor="new-title" className="text-sm font-medium">
                    Title
                  </label>
                  <Input id="new-title" name="title" required maxLength={80} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="new-status" className="text-sm font-medium">
                    Status
                  </label>
                  <select
                    id="new-status"
                    name="status"
                    defaultValue="active"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="active">Watching</option>
                    <option value="inactive">Paused</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="new-description" className="text-sm font-medium">
                    Notes (optional)
                  </label>
                  <Textarea id="new-description" name="description" maxLength={500} rows={3} placeholder="Why you added this show/movie, your progress, etc." />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit">Add to Watchlist</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        ) : null}
      </div>

      {status && message ? (
        <p
          className={`rounded-md border px-3 py-2 text-sm ${
            status === "success"
              ? "border-emerald-500/30 text-emerald-600"
              : "border-destructive/30 text-destructive"
          }`}
        >
          {message}
        </p>
      ) : null}

      {!canManage ? (
        <p className="text-sm text-muted-foreground">
          You can view your Watchlist, but only team owner/admin can add, edit, or remove favorites.
        </p>
      ) : null}

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">My List</CardTitle>
          <CardDescription>Your streaming favorites are listed here.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Notes</TableHead>
                <TableHead className="hidden md:table-cell">Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    Nothing saved yet. Discover something to add to your Watchlist!
                  </TableCell>
                </TableRow>
              ) : (
                items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>
                      <Badge variant={item.status === "Watching" ? "default" : "secondary"}>
                        {item.status === "Watching" ? "Watching" : "Paused"}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden max-w-[260px] truncate md:table-cell">
                      {item.description || "—"}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {formatTimestamp(item.updatedAt)}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" disabled={!canManage}>
                              Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit Watchlist Item</DialogTitle>
                              <DialogDescription>
                                Update this title in your watchlist.
                              </DialogDescription>
                            </DialogHeader>
                            <form action={updateFeatureItemAction} className="space-y-3">
                              <input type="hidden" name="id" value={item.id} />
                              <div className="space-y-2">
                                <label htmlFor={`title-${item.id}`} className="text-sm font-medium">
                                  Title
                                </label>
                                <Input
                                  id={`title-${item.id}`}
                                  name="title"
                                  defaultValue={item.title}
                                  required
                                  maxLength={80}
                                />
                              </div>

                              <div className="space-y-2">
                                <label htmlFor={`status-${item.id}`} className="text-sm font-medium">
                                  Status
                                </label>
                                <select
                                  id={`status-${item.id}`}
                                  name="status"
                                  defaultValue={item.status}
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                >
                                  <option value="Watching">Watching</option>
                                  <option value="Paused">Paused</option>
                                </select>
                              </div>

                              <div className="space-y-2">
                                <label
                                  htmlFor={`description-${item.id}`}
                                  className="text-sm font-medium"
                                >
                                  Notes (optional)
                                </label>
                                <Textarea
                                  id={`description-${item.id}`}
                                  name="description"
                                  defaultValue={item.description}
                                  maxLength={500}
                                  rows={3}
                                />
                              </div>

                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button type="button" variant="outline">
                                    Cancel
                                  </Button>
                                </DialogClose>
                                <Button type="submit">Save Changes</Button>
                              </DialogFooter>
                            </form>
                          </DialogContent>
                        </Dialog>

                        <form action={deleteFeatureItemAction}>
                          <input type="hidden" name="id" value={item.id} />
                          <Button
                            type="submit"
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                            disabled={!canManage}
                          >
                            <Trash2 className="mr-1 size-4" />
                            Remove
                          </Button>
                        </form>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}