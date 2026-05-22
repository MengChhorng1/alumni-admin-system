export const entityConfigs = [
  {
    "slug": "users",
    "title": "Users",
    "description": "Manage users records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "email",
      "password_hash",
      "first_name",
      "last_name",
      "profile_pic_url",
      "bio",
      "phone_number",
      "status",
      "is_verified",
      "created_at",
      "updated_at"
    ]
  },
  {
    "slug": "notifications",
    "title": "Notifications",
    "description": "Manage notifications records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "title",
      "message",
      "type",
      "target_url",
      "created_at"
    ]
  },
  {
    "slug": "user-notifications",
    "title": "User Notifications",
    "description": "Manage user notifications records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "user_id",
      "notification_id",
      "is_read",
      "read_at"
    ]
  },
  {
    "slug": "report-users",
    "title": "Report Users",
    "description": "Manage report users records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "reported_user_id",
      "reporter_id",
      "reason",
      "status",
      "reported_at"
    ]
  },
  {
    "slug": "user-connectors",
    "title": "User Connectors",
    "description": "Manage user connectors records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "requester_id",
      "addressee_id",
      "status",
      "created_at",
      "updated_at"
    ]
  },
  {
    "slug": "event-announcements",
    "title": "Event Announcements",
    "description": "Manage event announcements records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "title",
      "description",
      "cover_url",
      "event_start_date",
      "event_end_date",
      "registration_deadline",
      "venue",
      "creator_id",
      "is_deleted",
      "created_at",
      "updated_at"
    ]
  },
  {
    "slug": "event-participants",
    "title": "Event Participants",
    "description": "Manage event participants records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "event_id",
      "user_id",
      "status",
      "registered_at"
    ]
  },
  {
    "slug": "event-categories",
    "title": "Event Categories",
    "description": "Manage event categories records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "name",
      "description",
      "is_deleted",
      "created_at"
    ]
  },
  {
    "slug": "event-comments",
    "title": "Event Comments",
    "description": "Manage event comments records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "event_id",
      "user_id",
      "comment_text",
      "parent_comment_id",
      "is_deleted",
      "created_at"
    ]
  },
  {
    "slug": "jobs",
    "title": "Jobs",
    "description": "Manage jobs records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "title",
      "description",
      "company_name",
      "location",
      "job_type",
      "application_deadline",
      "poster_id",
      "is_deleted",
      "created_at",
      "updated_at"
    ]
  },
  {
    "slug": "skills",
    "title": "Skills",
    "description": "Manage skills records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "name",
      "description",
      "created_at"
    ]
  },
  {
    "slug": "user-skills",
    "title": "User Skills",
    "description": "Manage user skills records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "user_id",
      "skill_id",
      "proficiency_level",
      "endorsed_count"
    ]
  },
  {
    "slug": "job-skills",
    "title": "Job Skills",
    "description": "Manage job skills records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "job_id",
      "skill_id",
      "importance_level"
    ]
  },
  {
    "slug": "donation-campaigns",
    "title": "Donation Campaigns",
    "description": "Manage donation campaigns records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "title",
      "description",
      "target_amount",
      "current_amount",
      "start_date",
      "end_date",
      "organizer_id",
      "is_deleted",
      "created_at",
      "updated_at"
    ]
  },
  {
    "slug": "donations",
    "title": "Donations",
    "description": "Manage donations records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "campaign_id",
      "donor_id",
      "amount",
      "payment_method",
      "transaction_status",
      "donated_at",
      "is_anonymous"
    ]
  },
  {
    "slug": "payment-logs",
    "title": "Payment Logs",
    "description": "Manage payment logs records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "donation_id",
      "raw_gateway_response",
      "status_code",
      "logged_at"
    ]
  },
  {
    "slug": "campaign-categories",
    "title": "Campaign Categories",
    "description": "Manage campaign categories records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "name",
      "description",
      "is_deleted",
      "created_at"
    ]
  },
  {
    "slug": "departments",
    "title": "Departments",
    "description": "Manage departments records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "name",
      "code",
      "description",
      "created_at"
    ]
  },
  {
    "slug": "batches",
    "title": "Batches",
    "description": "Manage batches records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "name",
      "academic_year",
      "created_at"
    ]
  },
  {
    "slug": "majors",
    "title": "Majors",
    "description": "Manage majors records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "name",
      "department_id",
      "description"
    ]
  },
  {
    "slug": "alumni",
    "title": "Alumni",
    "description": "Manage alumni records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "user_id",
      "major_id",
      "batch_id",
      "graduation_date",
      "employment_status",
      "current_company",
      "current_position"
    ]
  },
  {
    "slug": "alumni-office",
    "title": "Alumni Office",
    "description": "Manage alumni office records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "office_name",
      "location",
      "contact_email",
      "contact_phone"
    ]
  },
  {
    "slug": "groups",
    "title": "Groups",
    "description": "Manage groups records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "name",
      "description",
      "cover_url",
      "creator_id",
      "group_type",
      "is_deleted",
      "created_at",
      "updated_at"
    ]
  },
  {
    "slug": "group-members",
    "title": "Group Members",
    "description": "Manage group members records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "group_id",
      "user_id",
      "role_in_group",
      "joined_at"
    ]
  },
  {
    "slug": "roles",
    "title": "Roles",
    "description": "Manage roles records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "name",
      "description"
    ]
  },
  {
    "slug": "permissions",
    "title": "Permissions",
    "description": "Manage permissions records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "name",
      "description"
    ]
  },
  {
    "slug": "role-permissions",
    "title": "Role Permissions",
    "description": "Manage role permissions records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "role_id",
      "permission_id"
    ]
  },
  {
    "slug": "user-roles",
    "title": "User Roles",
    "description": "Manage user roles records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "user_id",
      "role_id"
    ]
  },
  {
    "slug": "content-feeds",
    "title": "Content Feeds",
    "description": "Manage content feeds records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "author_id",
      "content_text",
      "visibility",
      "is_deleted",
      "created_at",
      "updated_at"
    ]
  },
  {
    "slug": "feed-comments",
    "title": "Feed Comments",
    "description": "Manage feed comments records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "feed_id",
      "user_id",
      "comment_text",
      "parent_comment_id",
      "is_deleted",
      "created_at"
    ]
  },
  {
    "slug": "report-feeds",
    "title": "Report Feeds",
    "description": "Manage report feeds records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "feed_id",
      "reporter_id",
      "reason",
      "status",
      "reported_at"
    ]
  },
  {
    "slug": "feed-reactions",
    "title": "Feed Reactions",
    "description": "Manage feed reactions records with search, filters, CRUD, export, and pagination.",
    "columns": [
      "id",
      "feed_id",
      "user_id",
      "reaction_type",
      "created_at"
    ]
  }
];
